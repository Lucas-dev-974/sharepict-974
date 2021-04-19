import 'package:flutter/material.dart';
<<<<<<< HEAD
import 'package:app/home.dart';
=======
import 'package:app/appBar.dart';
>>>>>>> 7027958be128d0ded746230831ae87dce72298e7

class Album extends StatelessWidget {
  static String routeName = '/album';


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SharePic974',
      home: Scaffold(
<<<<<<< HEAD
        appBar: AppBar(
          title: Text('SharePic974'),
          actions: <Widget>[
            TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.white),
              onPressed: () {
                Navigator.pushNamed(context, HomePage.routeName);
              },
              icon: Icon(Icons.account_circle),
              label: Text('Album'),
            ),
          ],
        ),
=======
       appBar: headerNav('SharePic974', context),
>>>>>>> 7027958be128d0ded746230831ae87dce72298e7
        body: Center(
          child: Text('Hello Album'),
        ),
      ),
    );
  }
}


