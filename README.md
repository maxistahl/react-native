# challenge-react-native
A repository for our react-native candidates

**Objective**: Create a mobile app that shows the pictures and names of the Tarmac people. When opening the app, a grid (*list view*) should appear showing thumbnails of the pictures of the different people in Tarmac, with their names.

On tapping a row navigate to a _detail page_ of that person. Display the image fullwidth and bellow render the name, role and description (as described in the [json file](https://github.com/tarmac/challenge-react-native/blob/master/tarmac-people.json)) github or twitter account.

```javascript
{
  name: "John Doe",
  role: "Developer",
  pic: "johndoe",
  github: "https://github.com/",
  width: 500,
  height: 500,
  description: "JohnDoe is a developer"
}
```

The person’s picture can be constructed from the pic attribute like this:
`http://tarmac.io/assets/members/<picattributevalue>.png`. So in the above example, the picture can be obtained from http://tarmac.io/assets/members/johndoe.png

After the app is complete, create a Pull Request to the **master** branch for the code to be reviewed.

Happy development!
