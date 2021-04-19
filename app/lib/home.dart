import 'package:app/login.dart';
import 'package:flutter/material.dart';

/// This is the main application widget.
class HomePage extends StatelessWidget {
  static String routeName = '/home';

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
                Navigator.pushNamed(context, Login.routeName);

              },
              icon: Icon(Icons.account_circle),
              label: Text('Home'),
            ),
          ],
        ),
        body: Center(
          child: Text('Hello Home'),
        ),
      ),
    );
  }
}

/// This is the stateful widget that the main application instantiates.
class MyStatefulWidget extends StatefulWidget {
  final String test;

  MyStatefulWidget({this.test = 'Sweets Tester'}) {
    print(test);
  }

  @override
  State<StatefulWidget> createState() {
    print('[ProductManager Widget] createState');
    return _MyStatefulWidgetState();
  }
}

/// This is the private State class that goes with MyStatefulWidget.
class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  String dropdownValue = 'One';

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: dropdownValue,
      icon: const Icon(Icons.arrow_downward),
      iconSize: 24,
      elevation: 16,
      style: const TextStyle(color: Colors.deepPurple),
      underline: Container(
        height: 2,
        color: Colors.deepPurpleAccent,
      ),
      onChanged: (newValue) {
        setState(() {
          dropdownValue = newValue;
        });
      },
      items: <String>['One', 'Two', 'Free', 'Four']
          .map<DropdownMenuItem<String>>((value) {
        return DropdownMenuItem<String>(
          value: value,
          child: ElevatedButton(
            onPressed: () {
              if (value == "One") {
                print(context);
                //  Navigator.pushNamed(context, Album.routeName);
              } else {
                print('arrete un pé');
              }
            },
            child: Text(value),
          ),
        );
      }).toList(),
    );
  }
}
