import { Component, OnInit } from '@angular/core';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userProfile = {
    name: 'Ahmad Azmi',
    position: 'Junior Accounting Officer',
    imageUrl: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg',
    reportingTo: 'Salwa Assem',
    corporateLevel: 'Level 10',
    lifetime: '2.5 Years',
    vacationDaysLeft: 10,
    sickDaysLeft: 14
  };

  historyItems: HistoryItem[] = [
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Sick Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Non Paid Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' },
    { type: 'Annual Vacation', startDate: '2/3/2023', endDate: '10/3/2023', days: 8, approvedBy: 'Hazem Azmi' }
  ];

  pendingRequests: PendingRequest[] = [
    {
      name: 'Ahmed Mohamed',
      imageUrl: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg',
      submittedDate: '12/02/2023',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED'
    },
    {
      name: 'Ahmed Mohamed',
      imageUrl: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg',
      submittedDate: '12/02/2023',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED'
    }
  ];

  searchText = '';
  isEditing = false;

  constructor() { }

  ngOnInit(): void { }

  onNewRequest(): void {
    console.log('New request button clicked');
  }

  onAccept(request: PendingRequest): void {
    console.log('Accepted request for:', request.name);
  }

  onReject(request: PendingRequest): void {
    console.log('Rejected request for:', request.name);
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  onSearchChange(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }
}

interface PendingRequest {
  name: string;
  imageUrl: string;
  submittedDate: string;
  duration: string;
  salary: string;
}

interface HistoryItem {
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  approvedBy: string;
}