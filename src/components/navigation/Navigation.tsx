import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function Navigation() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          bgcolor: "background.default",
        },
      }}
    >
      <Box>hi</Box>
      <List>
        {NavList.map((item) => (
          <ListItem key={item.label}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListIt>
        ))}
      </List>
    </Drawer>
  );
}
