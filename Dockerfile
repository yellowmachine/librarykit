ARG BASE
ARG VERSION
ARG DISTRO
FROM ${BASE}:${VERSION}-${DISTRO}

ARG GIT_USER_NAME
ARG GIT_USER_EMAIL

# Instalación de dependencias del sistema
RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    wget \
    zsh \
    && rm -rf /var/lib/apt/lists/*

# Instala code-server
RUN wget https://github.com/coder/code-server/releases/download/v4.99.4/code-server_4.99.4_amd64.deb && \
    apt-get update && \
    apt-get install -y ./code-server_4.99.4_amd64.deb && \
    rm code-server_4.99.4_amd64.deb && \
    rm -rf /var/lib/apt/lists/*

# Instala GitHub CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | \
      dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && \
    chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | \
      tee /etc/apt/sources.list.d/github-cli.list > /dev/null && \
    apt-get update && \
    apt-get install -y gh && \
    rm -rf /var/lib/apt/lists/*

# Crea usuario y carpetas
RUN useradd -m coder && \
    mkdir -p /home/coder/project /home/coder/.config /home/coder/.ssh && \
    chown -R coder:coder /home/coder/

RUN chsh -s /bin/zsh coder

# Instala Node.js solo si no existe
RUN if ! command -v npm; then \
      curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
      apt-get update && apt-get install -y nodejs && \
      rm -rf /var/lib/apt/lists/*; \
    fi

USER coder
WORKDIR /home/coder/project

ENV HOME=/home/coder
RUN mkdir -p /home/coder/.npm-global && \
    npm config set prefix '/home/coder/.npm-global' && \
    echo 'export PATH=/home/coder/.npm-global/bin:$PATH' >> /home/coder/.bashrc && \
    echo 'export PATH=/home/coder/.npm-global/bin:$PATH' >> /home/coder/.zshrc

ENV PATH="$HOME/.npm-global/bin:${PATH}"

RUN git config --global user.email "${GIT_USER_EMAIL}" && \
    git config --global user.name "${GIT_USER_NAME}"

EXPOSE 8080

CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "/home/coder/project"]
