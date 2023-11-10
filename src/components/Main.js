import React, { useState } from 'react';
import '../css/Main.css';
import {
  mdiAccountMultipleOutline,
  mdiAccountWrenchOutline,
  mdiArrowExpandAll,
  mdiCalendarRangeOutline,
  mdiCameraOutline,
  mdiCar,
  mdiCarWrench,
  mdiChatProcessingOutline,
  mdiChevronDoubleDown,
  mdiCloudUploadOutline,
  mdiCommentEditOutline,
  mdiCurrencyUsd,
  mdiFileDocumentCheckOutline,
  mdiFileDocumentMultipleOutline,
  mdiHammerWrench,
  mdiMonitorDashboard,
  mdiPencil,
  mdiPoll,
  mdiTools,
  mdiUmbrellaOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import CustomTable from './CustomTable';

function Main(props) {
  const timelines = [
    'Arrived',
    'Estimate Approved',
    'Parts Ordered',
    'Parts Arrived',
    'Repair Plan',
    'Supplement Hold',
    'Supplement Approved',
    'Body Frame',
    'Mechanical',
    'Paint',
    'Reassembly',
    'ADAS Mechanical',
    'Detail',
    'Ready for Pickup',
    'Dilevered',
    'Plaid in Full',
  ];

  const ExpandCardText = [
    { title: 'Payment', icon: mdiCurrencyUsd },
    { title: 'Comments', icon: mdiCommentEditOutline },
    { title: 'CharLink', icon: mdiChatProcessingOutline },
    { title: 'E-Sign', icon: mdiPencil },
    { title: 'Dates', icon: mdiCalendarRangeOutline },
    { title: 'Customer', icon: mdiAccountMultipleOutline },
    { title: 'Vehicle', icon: mdiCar },
    { title: 'Insurance', icon: mdiUmbrellaOutline },
    { title: 'Photos', icon: mdiCameraOutline },
    { title: 'Estimate', icon: mdiFileDocumentMultipleOutline },
    { title: 'Production', icon: mdiHammerWrench },
    { title: 'Staff', icon: mdiAccountWrenchOutline },
    { title: 'Parts', icon: mdiTools },
    { title: 'Documents', icon: mdiCloudUploadOutline },
    { title: 'Activity', icon: mdiMonitorDashboard },
    { title: 'Reports', icon: mdiPoll },
    { title: 'Final', icon: mdiFileDocumentCheckOutline },
    { title: 'Total Loss Estimator', icon: mdiCarWrench },
  ];

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <div className="main-layout-wrapper">
      <div className="top-header" style={{ marginLeft: '8px' }}>
        <h5 style={{ fontSize: '19px' }}>CMX Dashboard | FolderX</h5>
        <div class="dropdown">
          <button
            class="btn btn-sm dropdown-toggle text-uppercase text-white fw-medium"
            type="button"
            style={{
              borderRadius: '20px',
              paddingInline: '15px',
              backgroundColor: 'orange',
            }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          >
            Options
          </button>
          {isOptionsOpen && (
            <ul className="dropdown-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
            </ul>
          )}
        </div>
      </div>

      <div className="header-divider" />

      {/* Text below header */}
      <div
        style={{ marginInline: '15px' }}
        className="text-below-header font-12 d-flex"
      >
        <div>
          <span className="fw-medium">{'RO# XXXXXXXX | '}</span>
          <span className="fw-medium">{'Owner Last Name | '}</span>
          <span className="fw-medium">{'Owner First Name | '}</span>
          <span className="fw-medium">{'YEAR, MAKE, MODEL | '}</span>
          <span className="fw-medium">{'17 DIGIT VIN# | '}</span>
        </div>

        <div
          style={{ float: 'right' }}
          className="w-100 d-flex flex-column align-items-end text-orange fw-semibold"
        >
          <span>OPEN 2ND PRINT</span>
          <span>PRINT FINAL</span>
        </div>
      </div>

      {/* Body Section */}
      <div style={{ marginInline: '24px' }}>
        {/* ShortCut Section */}
        <h5 style={{ fontSize: '19px' }}>Shortcut</h5>
        <div class="card">
          <div class="card-body py-2 section-text-wrapper fw-bold text-uppercase font-12">
            <p class="mb-0 section-text">payment</p>
            <p class="mb-0 section-text">Comments</p>
            <p class="mb-0 section-text">Chatlink</p>
            <p class="mb-0 section-text">e-shop</p>
            <p class="mb-0 section-text">dates</p>
            <p class="mb-0 section-text">customer</p>
            <p class="mb-0 section-text">vehicle</p>
            <p class="mb-0 section-text">insurance</p>
            <p class="mb-0 section-text">photo</p>
            <p class="mb-0 section-text">estimate</p>
            <p class="mb-0 section-text">production</p>
            <p class="mb-0 section-text">parts</p>
            <p class="mb-0 section-text">staff</p>
            <p class="mb-0 section-text">sublet</p>
            <p class="mb-0 section-text">docs</p>
            <p class="mb-0 section-text">activity</p>
            <p class="mb-0 section-text">reports</p>
            <p class="mb-0 section-text">final</p>
            <p class="mb-0 section-text">total loss</p>
          </div>
        </div>

        {/* 1st Row */}
        <div
          className="my-4 d-flex all-table-wrapper"
          style={{ gap: '1em' }}
        >
          {/* 1st Column */}
          <div className="first-column-table d-flex flex-column align-items-center">
            {/* 3 small cards */}
            <div
              className="mt-5 cars-info-card d-flex"
              style={{ gap: '1em' }}
            >
              {/* RO # */}
              <div className="card">
                <div
                  class="card-body d-flex align-items-center"
                  style={{ padding: '8px', gap: '5px' }}
                >
                  <div className="d-flex flex-column align-items-center">
                    <span className="text-secondary">2</span>
                    <Icon
                      path={mdiChevronDoubleDown}
                      size={1}
                      horizontal
                    />
                  </div>
                  <span className="fw-bold font-13">RO# 10001</span>
                </div>
              </div>
              {/* Car Image */}
              <div className="card car-image-card">
                <div
                  class="card-body d-flex align-items-center"
                  style={{ padding: '8px' }}
                >
                  <img
                    src={require('../assets/car.png')}
                    class="card-img-top"
                    style={{ height: '70px' }}
                    alt="Not Found"
                  />
                </div>
              </div>
              {/* Car Info */}
              <div className="card">
                <div
                  class="card-body d-flex flex-column justify-content-center align-items-center font-13"
                  style={{
                    paddingBlock: '0 10',
                    paddingInline: '25px',
                  }}
                >
                  <span className="fw-bold">Right Front</span>
                  <span className="fw-bold">Left Front</span>
                  <span
                    style={{ color: 'grey' }}
                    className="fw-medium"
                  >
                    Point of Impact
                  </span>
                </div>
              </div>
            </div>

            <CustomTable
              title={'Customer'}
              data={[
                { key: 'Owner', valueOfCol1: 'LastName, FirstName' },
                { key: '1 Phone', valueOfCol1: '555-555-5555' },
                { key: '2 Phone', valueOfCol1: '555-555-5555' },
                { key: 'Email', valueOfCol1: 'email@mail.com' },
                { key: 'Cust .Id', valueOfCol1: '1001' },
              ]}
            />

            <CustomTable
              title={'Dates'}
              noOfCols={3}
              data={[
                {
                  key: 'Appt | Taw | Drop',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Appt Date',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Vehicle Arrival Date',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Authorization Signed',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Target Date',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Rental Company',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Total Job Hours',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Cycle Time',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Ready for Pickup',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Customer Notified',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
                {
                  key: 'Vehicle Delivered',
                  valueOfCol1: '',
                  valueOfCol2: '',
                },
              ]}
            />
          </div>

          {/* 2nd Column */}
          <div className="second-column-table d-flex flex-column align-items-center">
            <CustomTable
              title={'Vehicle'}
              data={[
                { key: 'VIN' },
                { key: 'Year' },
                { key: 'Make' },
                { key: 'Model' },
                { key: 'Trim' },
                { key: 'Mileage' },
              ]}
              secondCol={[]}
            />
            <CustomTable
              title={'Insurance'}
              data={[
                { key: 'Company' },
                { key: 'Claim#' },
                { key: '1 Phone' },
                { key: 'Loss Type' },
                { key: 'Email' },
                { key: 'Adjuster' },
              ]}
            />
            <CustomTable
              title={'Staff'}
              data={[
                { key: 'Estimator', value: 'Full name' },
                { key: 'Body Tech', value: 'Full name' },
                { key: 'Paint Tech', value: 'Full name' },
                { key: 'Frame Tech', value: 'Full name' },
                { key: 'Detail Tech', value: 'Full name' },
              ]}
            />
          </div>

          {/* 3rd Column */}
          <div className="third-column-table d-flex flex-column align-items-center">
            <CustomTable
              multipleTitles={['Production I', 'Production II']}
              noOfCols={4}
              headers={['Operation', 'Status', 'EMP.ID', 'Date']}
              data={[
                {
                  key: 'EOR Parts Ordered',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'EOR Parts Arrived',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Repair Plan',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Supplement Hold',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Supp Approved',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Supp Parts Ordered',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Supp Parts Arrived',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Vehicle IN Shop',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Vehicle QC Check',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Vehicle Test Drive',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
                {
                  key: 'Completed',
                  valueOfCol1: '',
                  valueOfCol2: '',
                  valueOfCol3: '',
                },
              ]}
            />
            <CustomTable
              title={'Final'}
              data={[
                { key: 'Final' },
                { key: 'Posted' },
                { key: 'Vehicle Status' },
                { key: '(CCC) Estimate', valueOfCol1: 'Open' },
                { key: 'CMX RO Status', valueOfCol1: 'Open' },
              ]}
            />
            <CustomTable
              title={'Payments'}
              data={[
                { key: 'Customer', valueOfCol1: '$0.00' },
                { key: 'Insurances', valueOfCol1: '$0.00' },
                { key: 'Grand Total', valueOfCol1: '$0.00' },
                { key: 'Received', valueOfCol1: '$0.00' },
                { key: 'Balance', valueOfCol1: '$0.00' },
              ]}
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div>
          <h5 style={{ fontSize: '19px' }}>Timeline</h5>
          <div className="card">
            <div className="py-2 timeline-text-wrapper fw-bold text-capitalize font-12">
              {timelines.map((timeline, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center"
                >
                  <div className="timeline-circle"></div>
                  <div className="timeline-line"></div>
                  <p
                    className="pl-2"
                    style={{
                      marginInline: '10px',
                      marginBottom: '4px',
                      textWrap: 'nowrap',
                    }}
                  >
                    {timeline}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Text below Timeline (Car info) */}
          <div
            style={{ margin: '10px 15px' }}
            className="font-12 d-flex justify-content-between"
          >
            <div>
              <span className="fw-medium">{'RO# XXXXXXXX | '}</span>
              <span className="fw-medium">
                {'Owner Last Name | '}
              </span>
              <span className="fw-medium">
                {'Owner First Name | '}
              </span>
              <span className="fw-medium">
                {'YEAR, MAKE, MODEL | '}
              </span>
              <span className="fw-medium">{'17 DIGIT VIN# | '}</span>
            </div>
          </div>

          {/* Expand Icon */}
          <div className="d-flex mb-2 justify-content-end">
            <Icon path={mdiArrowExpandAll} size={1} />
          </div>

          {ExpandCardText.map((card, index) => (
            <div
              className="card my-2"
              style={{ boxShadow: '1px 2px 4px 0px gray' }}
            >
              <div key={index} className="card-body py-1">
                <Icon path={mdiChevronDoubleDown} size={1} />
                <Icon path={card.icon} size={1} className="mx-4" />
                <span>{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
