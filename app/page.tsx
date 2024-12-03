import PdfViewer from "./components/PdfViewer";
export default function Home() {
  return (
    <PdfViewer url={'/daftar_menu.pdf'} />
  );
}
