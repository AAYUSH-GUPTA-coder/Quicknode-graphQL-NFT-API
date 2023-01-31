import {
  useTrendingCollections,
  TrendingCollectionsTimePeriod,
} from "@quicknode/icy-nft-hooks";
import { useState, useEffect } from "react";

function Collections() {
  const [cursor, setCursor] = useState("");
  // const [collections, setCollections] = useState();
  // const [pageInfo, setPageInfo] = useState();
  const [timePeriod, setTimePeriod] = useState("TWELVE_HOURS");
  // useEffect(() => {
    const { collections, pageInfo } = useTrendingCollections({
      orderBy: "VOLUME",
      orderDirection: "DESC",
      timePeriod: TrendingCollectionsTimePeriod.timePeriod,
      first: 10,
      after: cursor,
    });
    // setCollections(token.collections);
    // setPageInfo(token.pageInfo);
  // }, [timePeriod]);

  return (
    <div className="App bg-black text-white">
      console.log("working");
      <div className='w-full flex justify-end gap-3'>
        <div className='text-xl'>Stats in last</div>
        <button className='text-xl' onclick={()=>setTimePeriod("TWELVE_HOURS")}>12 hours</button>
        <button className='text-xl' onclick={()=>setTimePeriod("ONE_HOUR")}>1 hour</button>
        <button className='text-xl' onclick={()=>setTimePeriod("ONE_DAY")}>1 day</button>
        <button className='text-xl' onclick={()=>setTimePeriod("SEVEN_DAYS")}>7 days</button>
      </div>
      <table className='table-auto border-separate border border-slate-400 w-full text-sm text-left text-white'>
        <thead className='table-header-group text-xl'>
          <tr className='table-row'>
            <th scope="col" className='table-cell text-left px-6 py-3'>Collection</th>
            <th scope="col" className='table-cell text-right px-6 py-3'>Floor</th>
            <th scope="col" className='table-cell text-right px-6 py-3'>Volume</th>
            <th scope="col" className='table-cell text-right px-6 py-3'>Total Sales</th>
            <th scope="col" className='table-cell text-right px-6 py-3'>Average</th>
          </tr>
        </thead>
        <tbody>
          {collections && collections.map((collection) => {
            return (
              <tr key={collection.address} className='table-row odd:bg-gray-800 odd:border-gray-700 even:bg-gray-900 even:border-gray-700'>
                <th scope="row" className='table-cell text-left  px-6 py-2 font-medium text-white whitespace-nowrap '>{collection.name}</th>
                <td className="table-cell text-right px-6 py-2  mono">Ξ{collection.stats.floor.toFixed(3)}</td>
                <td className="table-cell text-right px-6 py-2  mono">Ξ{collection.stats.volume.toFixed(3)}</td>
                <td className="table-cell text-right px-6 py-2  mono">{collection.stats.totalSales}</td>
                <td className="table-cell text-right px-6 py-2  mono">Ξ{collection.stats.average.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pageInfo?.hasNextPage && (
        <div
          className="w-full flex items-center justify-end"
        >
          <button
            onClick={() => {
              setCursor(pageInfo.endCursor ?? undefined);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Collections;
