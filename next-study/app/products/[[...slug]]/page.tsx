import React from 'react'

interface Props{
    params:{ slug: string[] };
    searchParams:{ sortOrder:string };
}

const PRoductPage = ({params:{slug} , searchParams:{sortOrder} }:Props) => {
  return (
    <div>PRoductPage {slug}  {sortOrder} </div>
  )
}

export default PRoductPage