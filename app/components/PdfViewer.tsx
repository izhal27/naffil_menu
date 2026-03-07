type PdfViewerProps = {
  url: string;
};

export default function PdfViewer({ url }: PdfViewerProps) {
  return (
    <main className="min-h-screen bg-[#171719] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <iframe
          src={url}
          title="PDF Menu Naffil"
          className="h-[85vh] w-full rounded border border-white/15 bg-white"
        />
      </div>
    </main>
  );
}
