import React from 'react';
import CommentForm from './CommentForm';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';





    function RenderDish({dish}){
    if (dish!=null) {
        return(
            <div >
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} ></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

function RenderComments({comments}){

if (comments!=null) { 
    const listcomment = comments.map((comment)=>{
        return(<div><li> 
           <p> {comment.rating} </p>
           <p> {comment.comment}</p>
           <p> {comment.author}</p>
           <p> {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
            </li></div>
        )
    })
    return (
        <div>
        <ul  key={comments.id}>
            {listcomment}
        </ul>
        <CommentForm/>
        </div>
        );

  }
  else{
    return(
        <div></div>
    )
}
}

  const Dishdetail = (props)=> {
    if (props.dish!=null) {
      return(
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div> 
      )
  }
  else{
      console.log('empty');
      return(
          <div></div>
      )
  }
  
}

export default Dishdetail;
