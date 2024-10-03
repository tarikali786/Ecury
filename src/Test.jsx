import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Test = () => {
  const [pdf, setPdf] = useState(null);
  const componentRef = useRef(null); // useRef for reliable element access

  const handleDownloadPdf = async () => {
    try {
      const element = componentRef.current; // Access element using ref

      if (!element) {
        throw new Error('Element not found'); // Handle missing element
      }

      // Ensure element is visible and styled correctly before capturing
      const originalDisplay = element.style.display;
      element.style.display = 'block'; // Make sure element is visible

      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);

      // Restore original display style
      element.style.display = originalDisplay;

      pdf.save('downloaded-file.pdf');
    } catch (err) {
      console.error(err); // Handle errors gracefully
    }
  };

  return (
    <div>
      <div id="my-component" ref={componentRef} style={{ display: 'block' }}>
        <h1>Hello, World!</h1>
      </div>
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
};

export default Test;
