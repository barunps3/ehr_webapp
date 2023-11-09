'use client'
import React, { useState } from "react"
import SearchResultCard from "../components/SearchResultCard"
import SearchCard from "../components/SearchCard"
import HeaderContent from "../components/HeaderContent"
import { searchResult } from "../components/SearchCard"
import './searchPage.css'


export default function SearchPage() {
  const [searchResult, setSearchResult] = useState<searchResult[]>([])

  type Status = "idle" | "loading" | "success" | "error";

  const [status, setStatus] = useState<Status>("idle");
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

