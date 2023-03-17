import React from "react";
import _ from "lodash";
import { fetchUser } from "../../redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Table } from "antd";
import { colums } from "./userTable";
import "./userStyles.scss";

function UserContainer({ userData, fetchUser }) {
  const { users, loading, error } = userData;

  useEffect(() => {
    fetchUser();
  }, []);

  const results = _.get(users, "results");
  if (results !== undefined) {
    var data = _.map(results, (user) => {
      return {
        fullname: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        firstname: user.name.first,
        username: user.login.username,
        icon: user.picture.thumbnail,
      };
    });
  }

  return loading ? (
    <h1 className="loading">Loading...</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <div className="user__container">
      {users && (
        <Table
          columns={colums}
          dataSource={data}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
