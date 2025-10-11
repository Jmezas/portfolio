export function downloadCV(): void {
  const pdfUrl = '/cv/cv-jhaser-doc.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = `CV_Jhaser.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}