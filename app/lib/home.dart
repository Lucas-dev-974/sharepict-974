
import 'package:flutter/material.dart';
import 'package:app/appBar.dart';

class HomePage extends StatelessWidget {
  static String routeName = '/home';


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SharePic974',
      home: Scaffold(
        appBar: headerNav('SharePic974', context),
        body: Center(
          child: Text('Hello Home'),
        ),
      ),
    );
  }
}