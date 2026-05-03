import Link from "next/link";
import React from "react";

export default function childrenDashboardLayout({children}:{children:React.ReactNode}){
          return(
               <div>
                    <div className="flex">
                         <aside className="w-64 p-4 border-r">
                              <h2>Dashboard</h2>
                              <nav>
                                   <ul>
                                        <li>
                                             <Link href={`/dashboard`}>Dashboard</Link>
                                        </li>
                                        <li>
                                             <Link href={`/dashboard/analytics`}>Analytics</Link>
                                        </li>
                                   </ul>
                              </nav>
                         </aside>
                         <div className="flex-2 p-5">
                              {children}
                         </div>
                    </div>
               </div>
          )
}