import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [csvFile, setCsvFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setCsvFile(file);
  };

  const handleUpload = () => {
    // You can perform further operations here, such as sending the file to a server
    console.log("working");
    if (csvFile) {
      console.log("Uploading file:", csvFile);

      const reader = new FileReader();

      // Event listener on reader when the file
      // loads, we parse it and set the data.
      reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, {
          header: true,
        });
        console.log(csv, "csv is here");
        const updatedCsv = csv.data.map((row) => {
          // Check if the 'selectedtags' key is an empty string and convert it to an empty array
          if (row.selectedtags === "") {
            row.selectedtags = [];
          }

          return row;
        });
        setCsvData(csv);
      };

      reader.readAsText(csvFile);

      // You can use fetch or Axios to send the file to a server
    } else {
      console.log("Please select a CSV file.");
    }
  };

  const changeOption = (e, key) => {
    console.log(e, key);
    const newData = { ...csvData };
    const selectedObj = newData?.data[key]?.selectedtags?.find(
      (item) => item === e
    );
    console.log(selectedObj);
    if (!selectedObj) {
      newData.data[key].selectedtags.push(e);
    }

    setCsvData(newData);
  };


const removeTag=(key,valkey)=>
{
  console.log(key,valkey);
  const newData = { ...csvData };
  newData.data[key].selectedtags.splice(valkey, 1);
  setCsvData(newData);

}


  useEffect(() => {
    try {
      const credentialResponse = localStorage.getItem("Userdata").toString();

      const credentials = jwtDecode(credentialResponse);
    } catch (err) {
      navigate("/login");
    }
  }, []);






  return (
    <div>
      <div className="p-4 font-bold text-xl">upload CSV</div>
      <div>
        <div class="">
          <div class="extraOutline p-4 bg-white max-w-sm bg-whtie m-auto rounded-lg">
            <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
              <svg
                class="text-indigo-500 w-24 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div class="input_field flex flex-col  mx-auto text-center">
                <label>
                  <input
                    class="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                  />
                  <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                    drop
                  </div>
                </label>

                <div class="title text-indigo-500 uppercase">
                  excel sheet here or Browse
                </div>
              </div>
            </div>
          </div>
          <p className="flex justify-center">{csvFile?.name}</p>
          <div className="flex p-5  justify-center">
            <button
              onClick={handleUpload}
              type="button"
              class={` ${
                csvFile?.name
                  ? "bg-blue-700 hover:bg-blue-700 "
                  : "bg-blue-200 cursor-not-allowed "
              }  text-white    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 sm:px-28 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800`}
            >
              Upload
            </button>
          </div>

          <div className="text-xl font-bold">uploads</div>
          <div>
            {!csvData?.data?.length > 0 ? (
              <p className="text-3xl font-bold   flex justify-center">
                No Data available
              </p>
            ) : (
              <section class="py-1   bg-blueGray-50">
                <div class="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                      <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1"></div>
                      </div>
                    </div>

                    <div class="block w-full overflow-x-auto">
                      <table class="items-center bg-transparent w-full border-collapse ">
                        <thead>
                          <tr>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              SI no
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Links
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Prefix
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Add Tags
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              selected tags
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {csvData?.data?.map((data, key) => {
                            return (
                              <tr>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                  {data.id}
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                  {data.links}
                                </td>
                                <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {data.prefix}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  <select
                                    onChange={(e) =>
                                      changeOption(e.target.value, key)
                                    }
                                    class="block appearance-none w-36 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline space-y-2"
                                  >
                                    {data["select tags"]
                                      .split(",")
                                      .map((data) => {
                                        return <option>{data}</option>;
                                      })}
                                  </select>
                                </td>
                                <td class="border-t-0 px-6 align-center w-96  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 grid grid-cols-3 gap-2">
                                  {data?.selectedtags?.map((val,valkey) => {
                                    return (
                                      <div class="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-full">
                                        <span class="text-sm text-gray-800">
                                          {val}
                                        </span>
                                        <button value={val}
                                        onClick={()=>removeTag(key,valkey)}
                                          type="button"
                                          class="text-gray-600 hover:text-red-600 focus:outline-none"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                          >
                                            <line
                                              x1="8"
                                              y1="8"
                                              x2="16"
                                              y2="16"
                                            />
                                            <line
                                              x1="16"
                                              y1="8"
                                              x2="8"
                                              y2="16"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    );
                                  })}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <footer class="relative pt-8 pb-6 mt-16">
                  <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                      <div class="w-full md:w-6/12 px-4 mx-auto text-center"></div>
                    </div>
                  </div>
                </footer>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
