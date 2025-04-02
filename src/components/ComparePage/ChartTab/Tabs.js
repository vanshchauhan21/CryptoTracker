import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import "./Tabs.css";

export default function IconPositionTabs({coin}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      sx={{
        height: "50px",
      }}
    >
      <Tab className="id" icon={<Avatar alt={`${coin.name} logo`} src={coin.image} sx={{width: 25, height: 25, padding: 0}}/>} iconPosition="start" label={coin.name} />
    </Tabs>
  );
}
