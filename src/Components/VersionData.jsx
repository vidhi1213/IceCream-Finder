import React from 'react';
import moment from "moment";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const VersionData = React.memo(({versions}) => {
  /**
   * All data are displaying in componant.
   * So, our main page looks clear.
   */
    return (
        <TableBody>
          {versions.businesses && versions.businesses.length > 0 && versions.businesses.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell style={{width:"180px"}} component="th" scope="row"><img height="100px" width="100px" src={row.image_url} /></TableCell>
              <TableCell style={{width:"180px"}} component="th" scope="row">{row.name}</TableCell>
              <TableCell style={{width:"100px"}} align="left">{row.location?.address1}, {row.location?.city}</TableCell>
              <TableCell style={{width:"100px"}} align="left">{row.review_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    );
});

export default VersionData;