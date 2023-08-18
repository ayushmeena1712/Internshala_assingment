import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Component1() {
    const [data, setData] = useState<Data[]>([]);
    interface Data {
        userId: number,
        id: number,
        title: string,
        body: string
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        }).then(res => res.json()).then(data => {
            setData(data);
        })
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'userId', headerName: 'userID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'body', headerName: 'Body', width: 350 },
    ];

    const rows: Data[] = data.map((item) => ({
        id: item.id,
        userId: item.userId,
        title: item.title,
        body: item.body
    }));

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Box sx={{ height: 400, width: '50%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                />
            </Box>
        </div>
    )
}