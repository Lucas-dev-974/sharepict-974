import 'dart:convert';
import 'dart:io';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:app/register.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:app/home.dart';

class ApiResponse {
  // _data will hold any response converted into
  // its own object. For example user.
  Object _data;
  // _apiError will hold the error object
  Object _apiError;

  Object get Data => _data;
  set Data(Object data) => _data = data;

  Object get ApiError => _apiError as Object;
  set ApiError(Object error) => _apiError = error;
}

class ApiError {
  String _error;

  ApiError({String error}) {
    this._error = error;
  }

  String get error => _error;
  set error(String error) => _error = error;

  ApiError.fromJson(Map<String, dynamic> json) {
    _error = json['error'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['error'] = this._error;
    return data;
  }
}

class User {
  String _userId;
  String _lastname;
  String _name;
  String _pseudo;
  String _email;

  constructorUser(
      {String userId,
      String lastname,
      String name,
      String pseudo,
      String email}) {
    this._userId = userId;
    this._lastname = lastname;
    this._pseudo = pseudo;
    this._name = name;
    this._email = email;
  }

// Properties
  String get userId => _userId;
  set userId(String userId) => _userId = userId;
  String get lastname => _lastname;
  set lastname(String username) => _lastname = username;
  String get name => _name;
  set name(String name) => _name = name;
  String get pseudo => _pseudo;
  set pseudo(String Pseudo) => _pseudo = Pseudo;
  String get email => _email;
  set email(String email) => _email = email;

// create the user object from json input
  User.fromJson(Map<String, dynamic> json) {
    _userId = json['userId'];
    _lastname = json['lastname'];
    _name = json['name'];
    _pseudo = json['pseudo'];
    _email = json['email'];
  }

// exports to json
  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['userId'] = this._userId;
    data['lastname'] = this._lastname;
    data['name'] = this._name;
    data['pseudo'] = this._pseudo;
    data['email'] = this._email;
    return data;
  }
}

Future<ApiResponse> authenticateUser(String email, String password, page) async {
  ApiResponse _apiResponse = new ApiResponse();

  try {
    final response =
        await http.post(Uri.parse('http://127.0.0.1:8080/auth/login'), body: {
      'email': email,
      'password': password,
    });

    print(User.fromJson(json.decode(response.body)));
    switch (response.statusCode) {
      case 200:
        // Create storage

       // final storage =  window.localStorage;
        //storage['currentUser'] =  response.body;
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      prefs.setString('currentUser', response.body);
        Navigator.pushNamed(page, HomePage.routeName);
        _apiResponse.Data = User.fromJson(json.decode(response.body));
        break;
      case 401:
        _apiResponse.ApiError = ApiError.fromJson(json.decode(response.body));
        break;
      default:
        _apiResponse.ApiError = ApiError.fromJson(json.decode(response.body));
        break;
    }
  } on SocketException {
    _apiResponse.ApiError = ApiError(error: "Server error. Please retry");
  }

  return _apiResponse;
}

class Login extends StatelessWidget {
  static String routeName = '/login';

  var _email = '';
  var _password = '';

  void _handleSubmitted(page) async {
    await authenticateUser(_email, _password, page);
  }

  TextStyle style = TextStyle(fontFamily: 'Montserrat', fontSize: 20.0);
  @override
  Widget build(BuildContext context) {
    final emailField = TextFormField(
      key: Key("_email"),
      obscureText: false,
      style: style,
      decoration: InputDecoration(
          contentPadding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
          hintText: "Email",
          border:
              OutlineInputBorder(borderRadius: BorderRadius.circular(32.0))),
      onChanged: (String value) {
        _email = value;
      },
    );
    final passwordField = TextField(
      key: Key("_password"),
      obscureText: true,
      style: style,
      decoration: InputDecoration(
          hintText: "Mot de passe",
          border:
              OutlineInputBorder(borderRadius: BorderRadius.circular(32.0))),
      onChanged: (String value) {
        _password = value;
      },
    );
    final loginButon = Material(
      borderRadius: BorderRadius.circular(30.0),
      color: Color(0xff01a0c7),
      child: MaterialButton(
        minWidth: MediaQuery.of(context).size.width,
        onPressed: () {
          _handleSubmitted(context);
        },
        child: Text("Connexion",
            textAlign: TextAlign.center,
            style: style.copyWith(
                color: Colors.white, fontWeight: FontWeight.bold)),
      ),
    );
    final account = GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, Register.routeName);
      },
      child: Text(
        "Vous n'avez pas de compte ? Cliquez ici",
        style: TextStyle(
          color: Colors.black,
          fontWeight: FontWeight.bold,
        ),
      ),
    );

    return Scaffold(
      body: Center(
        child: Container(
          color: Colors.white,
          child: Padding(
            padding: const EdgeInsets.all(36.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                SizedBox(
                  height: 155.0,
                  child: Image.asset(
                    "assets/logo.png",
                    fit: BoxFit.contain,
                  ),
                ),
                SizedBox(height: 45.0),
                emailField,
                SizedBox(height: 25.0),
                passwordField,
                SizedBox(
                  height: 35.0,
                ),
                loginButon,
                SizedBox(
                  height: 15.0,
                ),
                account,
              ],
            ),
          ),
        ),
      ),
    );
  }
}
