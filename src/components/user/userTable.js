export const colums = [
  {
    title: "Full Name",
    dataIndex: "fullname",
    key: "fullname",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
    sortDirections: ["ascend", "descend"],
    reder: (fullname) => <span>{fullname}</span>,
  },
  {
    title: "Username",
    key: "username",
    dataIndex: "username",
    sorter: (a, b) => a.username.localeCompare(b.username),
    sortDirections: ["ascend", "descend"],
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Thumbnail Icon",
    key: "icon",
    dataIndex: "icon",
    render: (icon) => <img src={icon} className="icon" alt="" />,
  },
];
