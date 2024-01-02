

export default function PdfContainer({ defaultPdf }: {defaultPdf?: string}) {
  
        //{/* <a href={defaultPdf}>You can maximize</a> */}
  return (
    <object title="pdfViewer" data={defaultPdf} type="application/pdf" style={{'height': '100%', 'width': '100%'}}></object>
  )
} 