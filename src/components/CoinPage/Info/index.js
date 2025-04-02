import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function Info({ title, desc }) {

  const [toggle, setToggle] = useState(false);

  return (
      <Card sx={{ flexShrink: "0", width: "700px", height:"246px", borderRadius:"10px", boxShadow: "none", border: "2px solid rgba(58,128,233, 0.1)", backgroundColor: "rgba(58, 128, 233, 0.05)", padding: 0, margin: 0}}>
        <CardContent sx={{position: "relative",width: "620px", height: "179px", top: "36px", left: "40px", padding: "0 !important", margin:0}}>
          <Typography variant="h6" component="div" sx={{width: "620px", height: "22px", margin: 0, padding: 0, border: "none",fontSize: "18px", fontWeight: 600, color:" #000000", textAlign: "center"}}>
            {title}
          </Typography>
          <Typography variant="body2" component="div" 
            sx={{
              border: "none",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(0,0,0,0.6) !important",
              letterSpacing: "1px",
              lineHeight: "23px",
              textAlign: "justify",
              border: "none",
              margin: "10px 0 0 0",
              padding: 0,
              cursor: "pointer",
              height: "138px",
              // maxHeight: "m-content",
              overflowY: "auto",
              gap: "5px",
            }}
          >
            {toggle ? desc : `${desc.slice(0,450)}...`}{" "}
            {desc.length > 450 && (
              <span style={{fontSize: "14px", color: "#3A80E9", cursor: "pointer", fontWeight: 500}} onClick={() => setToggle(!toggle)}>
                {toggle ? "Read less" : "Read more"}
              </span>
            )}
          </Typography>
        </CardContent>
      </Card>

  );
}

export default Info;