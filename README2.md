<h1 align="center">
Addeur_App
</h1>
Private project for a China-based startup striving for reducing truck's emissions, so we wish to have an app that enables truckers to find their cargo quickly and efficiently executing 'empty cargo'. Therefore, all APIs are from Chinese suppliers such as Huawei, Alibaba, and Tencent.
<h1 align="center">
  <img alt="Addeur" title="AddeurApp" src="./mobile/images/logo.png" />
</h1>


## Addeur App
The app was created using Expo CLI.
To download all dependencies locally, run `yarn` in the terminal on the project main folder.

Once you've installed all dependencies, it will be ready to go.

To run the project follow the instructions below.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />


### `yarn build`

Builds the app for production to the `build` folder.<br />


The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!



### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments.








## Connecting to Server 

The server was created using Nodejs as it is using the Huawei Cloud Services as a Host.

To access the server from a remote computer, please follow the instructions:

1 Install Docker
2 Install Node
3 Connect to the provided VPN and follow the scripts mentioned below.

First of all, after installing Docker you'll need to connect it to the right port.
For this you can use some tool like DBeaver or Postbird for better visualization and Experience.

First, to connect the database, use
`$ docker run -d -p 5432:5432 --name addeur -e POSTGRES_PASSWORD=addeur postgres`

That's it, you're connected.
Now we need to connect the server:
It can be done directly from the Project Source Folder.
From there, access the terminal and use:
...

