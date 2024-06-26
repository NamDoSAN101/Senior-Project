"use client";
import React from "react";
import "./SelectSeat.css";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import logo from "@/assets/PLAN.png";
import Image from "next/image";
// import { toast } from "react-toastify";

const page = () => {
  const movie = {
    moviename: "Jawan",
    date: new Date(),
    language: "Hindi",
    type: "Action/Thriller",
    screens: [
      {
        name: "Screen 1",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 2",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 3",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
    ],
  };

  const screen = {
    name: "Screen 1",
    location: "PVR Cinemas, Forum Mall, Koramangala",
    timeslots: [
      {
        time: "10:00 AM",
        seats: [
          {
            // plat
            type: "Zone C",
            rows: [
              {
                // row 2
                rowname: "C",
                cols: [
                  //col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      // {
                      //   type: "seat",
                      //   status: "not-available",
                      //   seat_id: "3",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "4",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "not-available",
                      //   seat_id: "5",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "6",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "7",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "8",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "9",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "not-available",
                      //   seat_id: "10",
                      // },
                    ],
                  },
                  //col 2
                  // {
                  //   seats: [
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "1",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "2",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "3",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "4",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "5",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "6",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "7",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "8",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "9",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "10",
                  //     },
                  //   ],
                  // },
                ],
              },
              // {
              //   // row 2
              //   rowname: "F",
              //   cols: [
              //     //col 1
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //     //col 2
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //   ],
              // },
              // {
              //   // row 2
              //   rowname: "G",
              //   cols: [
              //     //col 1
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //     //col 2
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //   ],
              // },
            ],
            price: 500,
          },
          {
            // gold
            type: "Zone A",
            rows: [
              {
                // row 2
                rowname: "A1",
                cols: [
                  //col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "11",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "12",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "13",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "14",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "15",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "16",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "17",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "18",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "19",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "20",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "21",
                      },
                    ],
                  },
                  //col 2
                  // {
                  //   seats: [
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "12",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "13",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "14",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "15",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "16",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "17",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "18",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "19",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "20",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "21",
                  //     },
                  //   ],
                  // },
                ],
              },
              {
                // row 2
                rowname: "A2",
                cols: [
                  //col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "11",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "12",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "13",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "14",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "15",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "16",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "17",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "18",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "19",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "20",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "21",
                      },
                    ],
                  },
                  //col 2
                  // {
                  //   seats: [
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "1",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "2",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "3",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "4",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "5",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "6",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "7",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "8",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "9",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "10",
                  //     },
                  //   ],
                  // },
                ],
              },
              // {
              //   // row 2
              //   rowname: "C",
              //   cols: [
              //     //col 1
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //     //col 2
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //   ],
              // },
            ],
            price: 300,
          },
          {
            // silver - 20 objects
            type: "Zone B",
            rows: [
              {
                // row 2
                rowname: "B",
                cols: [
                  //col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      // {
                      //   type: "seat",
                      //   status: "not-available",
                      //   seat_id: "3",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "4",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "not-available",
                      //   seat_id: "5",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "6",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "7",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "8",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "available",
                      //   seat_id: "9",
                      // },
                      // {
                      //   type: "seat",
                      //   status: "not-available",
                      //   seat_id: "10",
                      // },
                    ],
                  },
                  //col 2
                  // {
                  //   seats: [
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "1",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "2",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "3",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "4",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "5",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "6",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "7",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "8",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "available",
                  //       seat_id: "9",
                  //     },
                  //     {
                  //       type: "seat",
                  //       status: "not-available",
                  //       seat_id: "10",
                  //     },
                  //   ],
                  // },
                ],
              },
              // {
              //   // row 2
              //   rowname: "A",
              //   cols: [
              //     //col 1
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //     //col 2
              //     {
              //       seats: [
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "1",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "2",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "3",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "4",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "5",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "6",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "7",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "8",
              //         },
              //         {
              //           type: "seat",
              //           status: "available",
              //           seat_id: "9",
              //         },
              //         {
              //           type: "seat",
              //           status: "not-available",
              //           seat_id: "10",
              //         },
              //       ],
              //     },
              //   ],
              // },
            ],
            price: 150,
          },
        ],
      },
      // {
      //   time: "1:30 PM",
      //   seats: [
      //     {
      //       // plat
      //       type: "platinum",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "H",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "F",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "G",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 500,
      //     },
      //     {
      //       // gold
      //       type: "gold",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "E",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "D",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "C",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 300,
      //     },
      //     {
      //       // silver - 20 objects
      //       type: "silver",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "B",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "A",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 150,
      //     },
      //   ],
      // },
      // {
      //   time: "4:00 PM",
      //   seats: [
      //     {
      //       // plat
      //       type: "platinum",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "H",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "F",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "G",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 500,
      //     },
      //     {
      //       // gold
      //       type: "gold",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "E",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "D",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "C",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 300,
      //     },
      //     {
      //       // silver - 20 objects
      //       type: "silver",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "B",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "A",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 150,
      //     },
      //   ],
      // },
      // {
      //   time: "8:30 PM",
      //   seats: [
      //     {
      //       // plat
      //       type: "platinum",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "H",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "F",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "G",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 500,
      //     },
      //     {
      //       // gold
      //       type: "gold",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "E",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "D",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "C",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 300,
      //     },
      //     {
      //       // silver - 20 objects
      //       type: "silver",
      //       rows: [
      //         {
      //           // row 2
      //           rowname: "B",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           // row 2
      //           rowname: "A",
      //           cols: [
      //             //col 1
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //             //col 2
      //             {
      //               seats: [
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "1",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "2",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "3",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "4",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "5",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "6",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "7",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "8",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "available",
      //                   seat_id: "9",
      //                 },
      //                 {
      //                   type: "seat",
      //                   status: "not-available",
      //                   seat_id: "10",
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //       price: 150,
      //     },
      //   ],
      // },
    ],
  };

  const generateSeatLayout = () => {
    const x = screen.timeslots.findIndex(
      (t: any) => t.time === selectedTime.time
    );

    return screen.timeslots[x].seats.map((seatType, index) => (
      <div className="seat-type" key={index}>
        <h2>
          {seatType.type}
          {/* - Rs. {seatType.price} */}
        </h2>

        <div className="seat-rows">
          {seatType.rows.map((row, rowIndex) => (
            <div className="seat-row" key={rowIndex}>
              <p className="rowname">{row.rowname}</p>

              <div className="seat-cols">
                {row.cols.map((col, colIndex) => (
                  <div className="seat-cols" key={colIndex}>
                    {col.seats.map((seat, seatIndex) => (
                      <div key={seatIndex}>
                        {seat.status == "available" && (
                          <span
                            className={
                              selectedSeats.find((s: any) => {
                                return (
                                  s.row === row.rowname &&
                                  s.seat_id === seat.seat_id &&
                                  s.col === colIndex
                                );
                              })
                                ? "seat-selected"
                                : "seat-available"
                            }
                            onClick={() =>
                              selectdeselectseat({
                                row: row.rowname,
                                col: colIndex,
                                seat_id: seat.seat_id,
                                price: seatType.price,
                              })
                            }
                          >
                            {seatIndex + 1}
                          </span>
                        )}

                        {seat.status == "not-available" && (
                          <span className="seat-unavailable">
                            {seatIndex + 1}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const [selectedTime, setSelectedTime] = React.useState<any>(
    screen.timeslots[0]
  );

  const [selectedSeats, setSelectedSeats] = React.useState<any[]>([]);

  const selectdeselectseat = (seat: any) => {
    const isselected = selectedSeats.findIndex((s: any) => {
      return (
        s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
      );
    });

    if (isselected) {
      setSelectedSeats(
        selectedSeats.filter((s: any) => s.seat_id !== seat.seat_id)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }

    console.log(selectedSeats, seat);
  };

  return (
    <div className="selectseatpage">
      <div className="s1">
        <div className="head">
          <h1>
            Market - BKK
            {/* {movie.moviename} - {movie.language} */}
          </h1>
          <br></br>
          <h3>
            {/* {movie.type} */}
            Location/Test
          </h3>
        </div>
      </div>

      <div className="selectseat">
        <Image src={logo} alt="logo" width={800} height={400} />
        {/* <div className="timecont">
          {screen.timeslots.map((time: any, index: number) => (
            <h3
              className={
                selectedTime.time === time.time ? "time selected" : "time"
              }
              onClick={() => {
                setSelectedTime(time);
                // setSelectedSeats([])
              }}
              key={index}
            >
              {time.time}
            </h3>
          ))}
        </div> */}
        <div className="indicators">
          <div>
            <span className="seat-unavailable"></span>
            <p>Not available</p>
          </div>
          <div>
            <span className="seat-available"></span>
            <p>Available</p>
          </div>
          <div>
            <span className="seat-selected"></span>
            <p>Selected</p>
          </div>
        </div>
        {generateSeatLayout()}
        <div className="totalconts"></div>
      </div>
    </div>
  );
};

export default page;
