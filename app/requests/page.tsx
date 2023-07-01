import React from 'react'
import Link from 'next/link'
import {Button} from '../materialComponents'
type Props = {}

const Requests = (props: Props) => {
  return (
    <div>
        <h1>Requests</h1>
        <Link href="requests/new">
            <Button>Neues Beratungsprotokoll</Button>
        </Link>
        <table>
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Kundenname</th>
                    <th>Protokollnummer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11.04.2023</td>
                    <td>Max Müller</td>
                    <td>29394842</td>
                </tr>
                <tr>
                    <td>02.01.2023</td>
                    <td>Jana Schmitt</td>
                    <td>24027610</td>
                </tr>
                <tr>
                    <td>21.11.2022</td>
                    <td>Felix Neuhaus</td>
                    <td>29458192</td>
                </tr>
            </tbody>
        </table>
    </div>
    
  )
}

export default Requests