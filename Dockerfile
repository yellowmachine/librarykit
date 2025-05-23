FROM node:18-bullseye-slim

# Instala solo las dependencias necesarias
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

# Crea directorios necesarios para code-server y tu proyecto
RUN mkdir -p /home/node/project /home/node/.local/share/code-server/extensions /home/node/.ssh

# Cambia el shell solo si realmente lo necesitas
# RUN chsh -s /bin/zsh node

USER node
WORKDIR /home/node/project

ENV HOME=/home/node
ENV NODE_ENV=development

# Configuración npm global
RUN mkdir -p /home/node/.npm-global && \
    npm config set prefix '/home/node/.npm-global' && \
    echo 'export PATH=/home/node/.npm-global/bin:$PATH' >> /home/node/.bashrc && \
    echo 'export PATH=/home/node/.npm-global/bin:$PATH' >> /home/node/.zshrc

ENV PATH="$HOME/.npm-global/bin:${PATH}"

RUN git config --global user.email "${GIT_USER_EMAIL}" && \
    git config --global user.name "${GIT_USER_NAME}"

EXPOSE 8080

CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "/home/node/project"]
