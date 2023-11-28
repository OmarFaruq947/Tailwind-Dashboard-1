import { Icon } from '@iconify/react';
import React from "react";
const StudentInformation = () => {
  const studentsData = [
    {
      id: 1,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",

    },

    {
      id: 2,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 3,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 4,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 5,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 6,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 7,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 8,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },
    {
      id: 9,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 10,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 11,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },

    {
      id: 12,
      Name: "Imrul Kayes",
      ExamName: "HSC",
      examResult: "5.00 GPA",
      ieltsResult: "8.5",
      ApplicationRound: "02",
      ApplicationType: "Bachelor",
      SubAgentStudent: "Yes",
      universityPreference: "Kyungsung university",
      email:'abcde@gmail.com',
      phone:"+880 111 222 333",
      emergencyContactNumber:"+880 222 444 555",
      majorPreference:"--",
      bankStatement:"Yes",
      referenceName:"Omar faruq",
      educationalInstituteName:"Kyungsung university",
      dateAndBirth:"29 april, 1997",
      passportNumber:"5155586645",
      postCode:"1216",
      nidError:"No",
      counsellorName:"abu said",
    },
  ];

  return (
    <div className="w-[1060px]">
      <h1 className="text-[24px] font-semibold">Student Progress</h1>
      {/* table start ; left side*/}
      <div className="col-span-2 w-full">
        <div className="flex flex-col">
          <div>
            <div className=" bg-white rounded-2xl p-3">
              <h1 className="text-[18px] font-semibold py-3">
                Student Information
              </h1>
              <div className="overflow-hidden rounded-2xl overflow-x-scroll ">
                <table className="min-w-full ">
                  <thead className="bg-white">
                    <tr className="text-[14px] text-[#181818] font-semibold ">
                      <td className="px-5 py-5">Name</td>
                      <td className="px-4">Exam Name</td>
                      <td className="px-4">Exam result</td>
                      <td className="px-4">IELTS result</td>
                      <td className="px-4">Application Round</td>
                      <td className="px-4">Application Type</td>
                      <td className="mx-24">Sub agent student</td>
                      <td className="px-4">University Preference</td>
                      <td className="px-4">Email</td>
                      <td className="px-4">Phone number</td>
                      <td className="px-4">Emergency Contact Number</td>
                      <td className="px-4">Major preference</td>
                      <td className="px-4">Bank Statement support</td>
                      <td className="px-4">Reference name</td>
                      <td className="px-4">Educational institute name</td>
                      <td className="px-4">Date and birth</td>
                      <td className="px-4">Passport number</td>
                      <td className="px-4">Postal code</td>
                      <td className="px-4">Nid error</td>
                      <td className="px-4">Counsellor name</td>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsData.map((data) => (
                      <tr
                        className={` transition duration-300 ease-in-out px-3 hover:bg-gray-50 border-b`}
                      >
                        <td className="text-sm text-[#181818] py-5   whitespace-nowrap font-semibold pl-4 pr-24">
                          {data.Name}
                        </td>
                        <td className="flex gap-8 text-sm text-[#181818] py-5 whitespace-nowrap   font-semibold pl-4 pr-8">
                          {data.ExamName} 
                          <Icon icon="iconamoon:arrow-down-2-fill" width={16}/>
                        </td>

                        <td className="text-sm text-[#181818] py-5  whitespace-nowrap   font-semibold  pl-4 pr-10">
                          {data.examResult}
                        </td>

                        <td className="text-sm text-[#181818] py-5 whitespace-nowrap   font-semibold  pl-4 pr-20">
                          {data.ieltsResult}
                        </td>

                        <td className="text-sm text-[#181818] py-5 whitespace-nowrap   font-semibold  pl-4 pr-32">
                          {data.ApplicationRound}
                        </td>

                        <td className="text-sm text-[#181818] py-5  whitespace-nowrap   font-semibold pl-4 pr-24">
                          {data.ApplicationType}
                        </td>

                        <td className="text-sm text-[#181818] py-5 pl-4 pr-24 whitespace-nowrap   font-semibold">
                          {data.SubAgentStudent}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-12 whitespace-nowrap  font-semibold">
                          {data.universityPreference}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-12 whitespace-nowrap  font-semibold">
                          {data.email}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-12 whitespace-nowrap  font-semibold">
                          {data.phone}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-24 whitespace-nowrap  font-semibold">
                          {data.emergencyContactNumber}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-28 whitespace-nowrap  font-semibold">
                          {data.majorPreference}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-40 whitespace-nowrap  font-semibold">
                          {data.bankStatement}
                        </td>
                        
                        <td className="text-sm text-[#181818] py-5   pl-4 pr-12 whitespace-nowrap  font-semibold">
                          {data.referenceName}
                        </td>
                        <td className="text-sm text-[#181818] py-5   pl-4 pr-16 whitespace-nowrap  font-semibold">
                          {data.educationalInstituteName}
                        </td>

                        <td className="text-sm text-[#181818] py-5   pl-4 pr-12 whitespace-nowrap  font-semibold">
                          {data.dateAndBirth}
                        </td>
                        <td className="text-sm text-[#181818] py-5   pl-4 pr-16 whitespace-nowrap  font-semibold">
                          {data.passportNumber}
                        </td>
                        <td className="text-sm text-[#181818] py-5   pl-4 pr-20 whitespace-nowrap  font-semibold">
                          {data.postCode}
                        </td>
                        <td className="text-sm text-[#181818] py-5   pl-4 pr-16 whitespace-nowrap  font-semibold">
                          {data.nidError}
                        </td>
                        <td className="text-sm text-[#181818] py-5   pl-4 pr-20 whitespace-nowrap  font-semibold">
                          {data.counsellorName}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* table end ; left side*/}
    </div>
  );
};

export default StudentInformation;
