import React from 'react';
import s from './MyPosts.module.css'
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Post from './Post/Post';
import {MyPostsProps} from './MyPostsContainer';
import {useFormik} from 'formik';


const MyPosts = (props: MyPostsProps) => {
    let postMessageItem = props.postMessage.map(m => <Post key={m.id} message={m.message} likeCount={m.likeCount}/>)
    return (
        <div className={s.posts}>
            <AddPostForm onClickAddPostButtonHandler={props.onClickAddPostButtonHandler}/>
            {postMessageItem}
        </div>
    );
}

type AddPostFormPropsType = {
    onClickAddPostButtonHandler: (values: string) => void
}

const AddPostForm = (props: AddPostFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: values => {
            props.onClickAddPostButtonHandler(values.post);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField id="outlined-basic"
                       label="Outlined"
                       variant="outlined"
                       {...formik.getFieldProps('post')}/>

            <Button type='submit' variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>

        </form>
    );
};

export default MyPosts