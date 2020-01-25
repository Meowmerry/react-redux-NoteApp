import React from "react";
import { connect } from "react-redux";
import { removeNote, showActive, showInactive } from "../redux/actions/actions";
import { Card, Button, Icon, Col, Row } from "antd";
import moment from 'moment'

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      searchContent:"",
      searchCategories:""
       };
  }
  handleDelete = id => () => {
    this.props.removeNewNote(id); // removeNewNote มาจากด้านล่าง action creatore กลายเป็น props ของ component
  };
  handleSearchTitle = e => {
    // console.log(e.target.value)
    this.setState({ searchTitle: e.target.value });
  };

  handleSearchContent =async e => {
    // console.log(e.target.value)
    await this.setState({ searchContent: e.target.value });
    // console.log(this.state.searchContent)
  };

  // handleSearchCategories = e => {
  //   this.setState({searchCategories : e.target.value });
  // }

  render() {
    let visibility = this.props.visibility;
    let notes = this.props.notes.filter(note => note.status === visibility);
    // console.log({ notes, visibility });
    const searchTitle = this.state.searchTitle;
    notes = notes.filter( x => { if (searchTitle === '') {
      return true
    } else {
      return x.title.toLocaleLowerCase()
      .includes(searchTitle.toLocaleLowerCase())
      }
    })
    const searchContent = this.state.searchContent;
    notes = notes.filter( x => { if (searchContent === '') {
      return true
    } else {
      return x.content.toLocaleLowerCase()
      .includes(searchContent.toLocaleLowerCase())
      }
    })

    // const searchCategories = this.state.searchCategories;
    // notes = notes.filter( x => { if (searchCategories === '') {
    //   return true
    // } else {
    //   return x.Categories.toLocaleLowerCase()
    //   .includes(searchCategories.toLocaleLowerCase())
    //   }
    // })

    return (
      <>
        <div
          className="card border-light mt3 text-center"
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#fad0c3"
          }}
        >
          <br />
          <h3>
            <Icon type="book" theme="filled" />
            Notes
          </h3>
          <div style={{ background: "#ECECEC", padding: "10px" }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="Serch by title"
                  bordered={false}
                  style={{ backgroundColor: "#03a9f4" }}
                >
                  <input
                    onChange={this.handleSearchTitle}
                    class="form-control"
                    id="myInput"
                    type="text"
                    placeholder="Search.."
                  ></input>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Serch by content"
                  bordered={false}
                  style={{ backgroundColor: "#7bdcb5" }}
                >
                  <input
                    onChange={this.handleSearchContent}
                    class="form-control"
                    id="myInput"
                    type="text"
                    placeholder="Search.."
                  ></input>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  // onChange={this.handleSearchCategories}
                  title="Serch by categories"
                  bordered={false}
                  style={{ backgroundColor: "#c5b3e5" }}
                >
                  <input
                    class="form-control"
                    id="myInput"
                    type="text"
                    placeholder="Search.."
                  ></input>
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <button
              type="button"
              class="btn btn-info"
              onClick={this.props.showActiveNotes}
            >
              Show Active Notes
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.props.showInactiveNotes}
            >
              Show Deleted Notes
            </button>
          </div>
          <br />{" "}
       
          <div
            style={{ background: "#ECECEC", padding: "30px", width: "100%", }}
                
          > 
            {notes.map(note => (
                
              <Card
                style={{ width: "100%", backgroundColor: "#edaa95",}}
                key={note.id}
                title={<b><h6> Title : <br/> {note.title}</h6></b>}
                extra={
                  <Button type="danger" onClick={this.handleDelete(note.id)}>
                    <Icon type="delete" />
                  </Button>
                }
              >
                
                <div
                  style={{
                    backgroundColor: "#d4c4fb",
                    marginTop: "10px",
                    paddingTop: "10px",
                    borderRadius: "2em 1em 4em / 0.5em 3em",
                    border: " 1px solid black"
                  }}
                >
                  <h6>Content</h6>
                  {note.content}
                  <br />
                  {note.time}
                </div>
                <div
                  style={{
                    backgroundColor: "#7bdcb5",
                    marginTop: "10px",
                    paddingTop: "10px",
                    borderRadius: "2em 1em 4em / 0.5em 3em",
                    border: " 1px solid black"
                  }}
                >
                  <h6>Category</h6>
                  {note.tag}
                  <br />
                  {/* {note.date.toString()} */}
                  {moment(note.date).format("DD/MM/YYYY HH:mm a")}
                  
                </div>
              </Card>
            ))}
          </div>
        </div>
      </>
    );
  }
}

// ทำให้ state ใน store กลายเป็น props ของ component
const mapStateToProps = function(state) {
  return {
    notes: state.notes,
    visibility: state.visibility
  };
};

// ทำให้ action creatore กลายเป็น props ของ component
const mapDispatchToProps = {
  removeNewNote: removeNote, // removeNote มาจาก action.js
  showActiveNotes: showActive,
  showInactiveNotes: showInactive
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
