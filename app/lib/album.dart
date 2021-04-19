import 'package:flutter/material.dart';
import 'package:app/home.dart';

class Album extends StatelessWidget {
  static String routeName = '/album';


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SharePic974',
      home: Scaffold(
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
        body: Center(
          child: Text('Hello Album'),
        ),
      ),
    );
  }
}


