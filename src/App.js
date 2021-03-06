import React from "react";

import baseStyles from "./base-styles/base-styles.scss";

// import json
import users from "./components/SocialProfile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

//import components
import Container from "./components/Container/Container";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import Statistics from "./components//Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";



function App() {
  return (
    <Container>
      <SocialProfile usersProfile={users} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;