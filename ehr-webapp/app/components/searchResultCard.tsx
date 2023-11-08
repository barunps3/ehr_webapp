import React from "react";

type searchResult = 
    {
        name: {
            firstName: string
        },
        idValue: string
    }[]


export default function SearchResultCard({ searchResult }: {searchResult: searchResult}) {
    const patients = searchResult.map((patient) => (
       <li key={patient.idValue}>{patient.name.firstName}</li> 
    ))
    
return (
    <>
        {patients}
    </>
   ) 
}