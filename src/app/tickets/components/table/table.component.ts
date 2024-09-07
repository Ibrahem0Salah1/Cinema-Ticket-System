import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  totalRecords = 250;
  constructor(
    private FileSaverService: FileSaverService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    console.log(this.ticketPurchaces);
  }
  // fileSaver
  downloadFile() {
    const fileUrl = 'assets/Ibrahim salah - Frontend Developer - CV.pdf'; // Update this with your file path or remote URL
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(
      (pdfData: Blob) => {
        const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
        this.FileSaverService.save(pdfBlob, 'myResume.pdf');
      },
      (error) => {
        console.error('Error downloading the file', error);
      }
    );
  }
  //array of purchaces
  ticketPurchaces: any[] = [
    {
      id: 1,
      user: 'احمد محمود',
      userImg: '',
      phoneNumber: '0123456789',
      ticketCode: 'C-101',
      price: 35,
      cinemas: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول',
        'برج العرب',
      ],
      seats: 1,
      count: 'مرة واحدة',
      ticketLabel: '45',
    },
    {
      id: 2,
      user: 'احمد محمود',
      userImg:
        'https://s3-alpha-sig.figma.com/img/59f0/2c4b/cbdd523e71b3116ed91774491e9f7543?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COCQk1aSGmV2TXJhl9AkDIFUKe3lwTopzUfVLf9ALy62V-kbGoUUPKQ3X18UELTqbpYtzXoIbvDBnEengat1giKcJ2eOmGWV7hY4VXFzuSaviSJJfGZQbBRdAS4pHsFs4-pdxs41zr4F6zPNu6M2a7rcZpB5RvrdWUtL2FJDJXo3LomFe4yPhFZ6HFGfQZbozky0cw3wkevBY5SYwDgR8ExXeeWgnjaffOBOoH-L4PJsxvwnhxwtDmoTBKRA0gIdFAoRDSUpcWMZcKkDnWP6j4mxkXLgH45LGQYRFouuQD8diX9rHx51aOyNFZiBm6t8VAB-btZFBxFkRYY0x0jJIA__',
      phoneNumber: '0123456789',
      ticketCode: 'C-101',
      price: 30,
      cinemas: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول',
        'برج العرب',
      ],
      seats: 1,
      count: 'مرة واحدة',
      ticketLabel: '45',
    },
    {
      id: 3,
      user: 'محمد الغريب',
      userImg:
        'https://s3-alpha-sig.figma.com/img/bf1c/e766/e29aa6f9014fbaca20461a4f1c43cfdb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JQt6mU3jQFxf4gTfx7ZWh89HQkN0ZSNIKOZI4iWoBgLjYOsx~AqLYkULIbgQn--MPx-sSDBGguSstJFVzIQWvv9wQMo5Bwd-M6bfZnnEd~RTXW4wjHs---UzfX4i1qaYExqGIgVtGMQM05u0Hqi-Rzg2w05QB-B7o~jUo8beXDP72aby-qwnb9rqoiSvXHUV98AJ5ig~toMFL5dSVAVwIVvnzxzmYONcQY2WzkSAKW4OONtlskpxzMvwEKF75B6WrBkJO41lshejclXiELJam1wNlImGqiBM-ml1CMhJChz-6edFS2DLEXeGHFRr-jz8VZw-e~wpFWzA5WV3m9OSFQ__',
      phoneNumber: '0123456789',
      ticketCode: 'C-102',
      price: 40,
      cinemas: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول',
        'برج العرب',
      ],
      seats: 1,
      count: 'مرة واحدة',
      ticketLabel: '45',
    },
    {
      id: 4,
      user: 'محمد الغريب',
      userImg: '',
      phoneNumber: '0123456789',
      ticketCode: 'C-103',
      price: 20,
      cinemas: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول',
        'برج العرب',
      ],
      seats: 1,
      count: 'مرة واحدة',
      ticketLabel: '45',
    },
    {
      id: 5,
      user: 'احمد محمود',
      phoneNumber: '0123456789',
      userImg: '',
      ticketCode: 'C-104',
      price: 35,
      cinemas: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول',
        'برج العرب',
      ],
      seats: 1,
      count: 'مرة واحدة',
      ticketLabel: '45',
    },
  ];
  //sorting by price
  isAscending: boolean = true;
  sortByPrice() {
    if (this.isAscending) {
      this.ticketPurchaces.sort((a, b) => a.price - b.price);
    } else {
      this.ticketPurchaces.sort((a, b) => b.price - a.price);
    }
    this.isAscending = !this.isAscending;
  }
  //tooltip of cinemas
  getCinemasTooltip(cinemas: string[]): string {
    return cinemas.join(', ');
  }
}
