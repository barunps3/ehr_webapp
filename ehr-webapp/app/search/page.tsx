'use client'
import React, { useState } from "react"
import SearchCard from "../components/searchCard"
import SearchResultCard from "../components/searchResultCard"
import HeaderContent from "../components/HeaderContent"

type searchResult = 
    {
        name: {
            firstName: string
        },
        idValue: string
    }

export default function SearchPage() {
  const [searchResult, setSearchResult] = useState<Array<searchResult>>([])
  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent />
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="content">
        <SearchCard setSearchResult={setSearchResult} />
        <SearchResultCard searchResult={searchResult} />
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}

