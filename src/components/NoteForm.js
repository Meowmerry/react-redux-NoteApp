import React from "react";
import { connect } from "react-redux";
import { addNote } from "../redux/actions/actions";
import { Select, DatePicker, Input } from "antd";
const { Option } = Select;


class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      tag: "",
      date: null, 
      // editTitle: false
    };
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };
  handleTagOnchange = value => {
    this.setState({ tag: value });
  };

  handleDateOnchange = date => {
    // console.log(date.format('L'))
    // this.setState({ date: date.format('L')}, ()=>console.log(this.state.date));
    this.setState({ date: date });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.title === "" || this.state.content === "") {
      return;
    }

    let title = this.state.title;
    let content = this.state.content;
    let tag = this.state.tag;
    let date = this.state.date;
     (title, content, tag, date); // addNewNote มาจากด้านล่าง action creatore กลายเป็น props ของ component
    this.setState({ title: "", content: "", tag: "", date: null });
  };

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <div className="row">
          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "10px"
            }}
          >
            <div
              className="card border-light mb-5 text-center"
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#eb9694"
              }}
            >
              <form onSubmit={this.handleOnSubmit}>
                <h3 className="text-center">Add a Note</h3>
                <h5>Title:</h5> <br />
                <Input
                  onChange={this.handleTitleChange}
                  value={this.state.title}
                  style={{ width: "390px" }}
                  type="text"
                  name="title"
                />
                <br />
                <h5>Content: </h5>
                <br />
                <textarea
                  onChange={this.handleContentChange}
                  style={{ width: "390px" }}
                  value={this.state.content}
                  name="content"
                  cols="30"
                  rows="5"
                />
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    
                  }}
                >
                  <Select
                    defaultValue="Categories"
                    style={{ width: '200px' , paddingLeft:"10px"}}
                    onChange={this.handleTagOnchange}
                    value={this.state.tag}
                  >
                    <Option value="">Categories</Option>
                    <Option value="general">General</Option>
                    <Option value="important">Important</Option>
                    <Option value="other">Other</Option>
                  </Select>
                 

                  <DatePicker
                    onChange={this.handleDateOnchange}
                    value={this.state.date}
                    style={{ width: '200px' , paddingLeft:"10px"}}
                  />
                </div>
                <br />
                <br />
                <button
                  disabled={
                    this.state.title === "" || this.state.content === ""
                  }
                  style={{ width: "180px" }}
                  className="btn btn-warning"
                  type="submit"
                >
                  Add Note
                </button>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ทำให้ action creatore กลายเป็น props ของ component
// ประกาศตัวแปรเผื่อนำไปใส่ใน พารามิเตอร์
const mapDispatchToProps = {
  addNewNote: addNote // addNote action.js
};
export default connect(null, mapDispatchToProps)(NoteForm);
