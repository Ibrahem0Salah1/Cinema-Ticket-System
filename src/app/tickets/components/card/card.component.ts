import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // qrCode Logic
  qrData: string = 'https://www.linkedin.com/company/technologiesa/'; // getting data in the QR code
  width: number = 110; // Width of the QR code
  errorCorrectionLevel: string = 'M';

  // Copying text to clipboard
  // textCopied: string = '';
  copyText(txt: HTMLParagraphElement): void {
    const textCopied = txt.textContent || '';
    navigator.clipboard.writeText(textCopied);
  }
}
