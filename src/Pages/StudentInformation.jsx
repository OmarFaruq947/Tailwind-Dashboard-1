import React from "react";
import note from "../assets/note-02.svg";
const StudentInformation = () => {
  const studentsData = [
    { id: 1, Col1: "Student Name", Col2: "Imrul Kayes" },
    { id: 2, Col1: "Student ID", Col2: "42557662665" },
    { id: 3, Col1: "email", Col2: "mailton@gmail.com" },
    { id: 4, Col1: "Phone Number", Col2: "+880 21224455788" },
    { id: 5, Col1: "Program", Col2: "Bachelor" },
    { id: 6, Col1: "Total GPA", Col2: "5.00" },
    { id: 7, Col1: "IELTS", Col2: "8.5" },
    { id: 8, Col1: "Application Round", Col2: "02" },
    { id: 9, Col1: "Application", Col2: "Bachelor" },
    { id: 10, Col1: "University Preferred", Col2: "Kyungsung University" },
    { id: 11, Col1: "Sub Agent Student", Col2: "No" },
    { id: 12, Col1: "Nid error", Col2: "Yes" },
  ];

  const ID = studentsData.map((studentData) => studentData.id);
  console.log(ID);

  let getClassName = null;
  if (ID % 2 == 0) {
    getClassName = FAFAFA;
  }

  if (ID % 2 !== 0) {
    getClassName = 181818;
  }
  console.log(getClassName);
  return (
    <>
      <h1 className="text-[24px] font-semibold">Student Progress</h1>

      <div className="grid lg:grid-cols-3 mt-5 gap-16">
        {/* table start ; left side*/}
        <div className="col-span-2 w-full">
          <div class="flex flex-col">
            <div>
              <div class=" bg-white rounded-2xl p-3">
                <h1 className="text-[18px] font-semibold py-3">
                  Student Information
                </h1>
                <div class="overflow-hidden rounded-2xl">
                  <table class="min-w-full ">
                    <tbody>
                      {studentsData.map((data) => (
                        <tr
                          class={`bg-[#FAFAFA] transition duration-300 ease-in-out hover:bg-gray-100`}
                        >
                          <td class="text-sm text-[#181818] px-6 py-4 whitespace-nowrap font-semibold">
                            {data.Col1}
                          </td>
                          <td class="text-sm text-[#181818] px-6 py-4 whitespace-nowrap text-right font-semibold">
                            {data.Col2}
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

        {/* right side start */}
        <div className="flex-col space-y-4">
          <section class="flex justify-center bg-white rounded-2xl p-6">
            <div class="w-full">
              <h2 class="text-2xl text-[#181818] font-semibold mb-7">
                Application Status
              </h2>

              <div class="w-full bg-[#EDF0F0] max-w-sm my-12 mx-auto rounded-lg overflow-hidden border border-[#EDF0F0]">
                <div class="bg-[#0090A6] text-xs leading-none py-1 w-[20%]"></div>
              </div>

              <ul>
                <li class="relative flex items-baseline gap-6 pb-5">
                  <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#0090A6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      class="bi bi-circle-fill fill-[#0090A6]"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-[#181818] font-semibold">
                      Application Received
                    </p>
                    <p class="mt-2 text-[#8E8E8E] text-sm">15 May, 2023</p>
                  </div>
                </li>
                <li class="relative flex items-baseline gap-6 pb-5">
                  <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      class="bi bi-circle-fill fill-gray-400 "
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-[#8E8E8E] ">
                      Online application on process
                    </p>
                  </div>
                </li>
                <li class="relative flex items-baseline gap-6 pb-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      class="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-[#8E8E8E]">Agreement done</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* student document section start*/}
          <section class="flex justify-center bg-white rounded-2xl p-6  ">
            <div class="w-full">
              <h2 class="text-2xl text-[#181818] font-semibold mb-7">
                Student Documents
              </h2>

            <div className="h-[304px] overflow-y-scroll">

            <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full ">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

             <div className="flex gap-2 bg-[#F7F7F7] rounded-lg py-[14px] px-3 w-full mt-3">
              <img className="w-5 h-5" src={note} alt="" />
              <p>Onboarding documents.pdf</p>
             </div>

            </div>

             
            </div>
          </section>
          {/* student document section end*/}
        </div>
        {/* right side end */}
      </div>
    </>
  );
};

export default StudentInformation;
