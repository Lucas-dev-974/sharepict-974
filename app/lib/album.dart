import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
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
              onPressed: () {},
              icon: Icon(Icons.account_circle),
              label: Text('Toto'),
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


