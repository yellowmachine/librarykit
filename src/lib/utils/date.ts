export function formatDate(dateString: string | null, longFormat = false) {
  if (typeof dateString !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    console.error("Formato de fecha inválido. Se espera 'YYYY-MM-DD'.");
    return dateString;
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.error("Fecha inválida después de la conversión. Revisa el valor de entrada.");
    return dateString;
  }

  if (longFormat) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  } else {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

