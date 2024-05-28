"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Screen {
  name: string;
  location: string;
  seats: any[]; // Change the type to an array of numbers
  city: string;
  screenType: string;
}

const CreateScreenPage: React.FC = () => {
  const tempseatlayout = [
    {
      // platinum
      type: "platinum",
      rows: [
        {
          // row 2
          rowname: "H",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "G",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "F",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 500,
    },
    {
      // gold
      type: "gold",
      rows: [
        {
          // row 2
          rowname: "E",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "D",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "C",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 300,
    },
    {
      // silver - 20 objects
      type: "silver",
      rows: [
        {
          rowname: "B",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "A",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 150,
    },
  ];

  const [screen, setScreen] = useState<Screen>({
    name: "",
    location: "",
    seats: tempseatlayout,
    city: "",
    screenType: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setScreen({ ...screen, [name]: value });
  };
  const handleScreenTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setScreen({ ...screen, screenType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        screen.name === "" ||
        screen.location === "" ||
        screen.seats.length == 0 ||
        screen.city === "" ||
        screen.screenType === ""
      ) {
        toast.error("Please fill all the fields", {
          // position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/createscreen`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(screen),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Screen creation successful", data);

        toast.success("Screen Created Successfully", {
          // position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error("Screen creation failed", response.statusText);
        toast.error("Screen Creation Failed", {
          // position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formpage">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={screen.name}
        onChange={handleInputChange}
      />
      <br />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={screen.location}
        onChange={handleInputChange}
      />
      <br />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={screen.city}
        onChange={handleInputChange}
      />
      <br />

      <div>
        Market Type:
        <label>
          <input
            type="radio"
            name="screenType"
            value="Night"
            checked={screen.screenType === "Night"}
            onChange={handleScreenTypeChange}
          />
          Night
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="Fresh"
            checked={screen.screenType === "Fresh"}
            onChange={handleScreenTypeChange}
          />
          Fresh
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="Community"
            checked={screen.screenType === "Community"}
            onChange={handleScreenTypeChange}
          />
          Community
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="Flea"
            checked={screen.screenType === "Flea"}
            onChange={handleScreenTypeChange}
          />
          Flea
        </label>
      </div>
      <br />

      <button onClick={handleSubmit}>Create Location</button>
    </div>
  );
};

export default CreateScreenPage;
