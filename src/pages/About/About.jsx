import React from "react";

export default function About() {
  return (
    <div>
      <p>{text}</p>
      <br />
      <p>{text1}</p>
      <br />
      <p>{text2}</p>
      <br />
      <p>{text4}</p>
      <br />
      <p>{text5}</p>
      <br />
    </div>
  );
}

const text = `SAG bureau

1. Institute level verification .....Authenticity of student's application and eligibility criteria......academic performance, attendance records, etc.
2. District or state level.....nodal officer or education officer.....cross-checking the documents, compliance with state or national guidelines.
3. Income and caste verification.....govt database cross-check, revenue dept/social welfare dept.
4. Bank account verification......PFMS-verifies account details and Aadhar linkage.
5. Aadhar authentication....identity is genuine and hasn't applied for multiple scholarships.
6. Cross-verification with previous records.....No multiple scholarships for the same course.`;

const text1 = `Financial bureau
1. Application submission and verification
2. Sanctioning of Scholarship
3. Integration with financial systems......PFMS
4. Payment processing.....validation, Payment order generation and Direct Benefit Transfer(DBT)
5. Disbursement of funds.....Bank transfer and SMS/Email Notifications
6. Reconciliation and reporting
7. Grievance redressal
8. Post-Disbursement monitoring`;

const text2 = `Eligibility criteria for PMSS:
1. UG level course  at least 60% marks in 10+2
2. PG level course at least 60% marks in grad level`;

const text4 = `Documents:
1. Proof of admission to a recognized professional course.
2. Ex-serviceman/ ex-coast guard certificate.
3. Mark sheets of the qualifying exam.
4. Bank account details of the applicant.
5. Aadhar or other identification document.`;

const text5 = `Genuineness of documents in online medium
Digital signature certificates
eSign service
Aadhar based verification
QR codes and barcodes issued by govt agencies on the official/original documents
Document verification services
Blockchain technology`;
