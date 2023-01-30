import classes from './Profile.module.css';

const Profile = () => {
    return (
        <main className={classes.main}>
            <div className={classes.wrapper}>
                <img className={classes.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJ52TEJj-IDrETYCf6d38-qupU4M2W9M8og&usqp=CAU' />
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New posts</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </main>
    );
}

export default Profile;
