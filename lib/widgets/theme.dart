import 'package:flutter/material.dart';

final appTheme = ThemeData(
  primaryColor: Colors.orange[300],
  fontFamily: 'Cousine',
  iconTheme: IconThemeData(color: Color.fromRGBO(26, 25, 60, 1.0), size: 32.0),
  dividerTheme: DividerThemeData(
    color: Colors.grey[400],
    thickness: 2,
  ),
  textTheme: TextTheme(
    headline1: TextStyle(
      fontWeight: FontWeight.w700,
      fontSize: 28,
      color: Color.fromRGBO(26, 25, 60, 1.0),
    ),
    headline2: TextStyle(
      fontSize: 24.0,
      fontWeight: FontWeight.w400,
      color: Color.fromRGBO(26, 25, 60, 1.0),
    ),
    headline3: TextStyle(
      fontSize: 24.0,
      fontWeight: FontWeight.w700,
      color: Color.fromRGBO(26, 25, 60, 1.0),
    ),
    headline4: TextStyle(
      fontSize: 18.0,
      fontWeight: FontWeight.w400,
      color: Color.fromRGBO(26, 25, 60, 1.0),
    ),
    headline6: TextStyle(
      fontSize: 20.0,
      fontWeight: FontWeight.w400,
      color: Colors.black,
    ),
    caption: TextStyle(
      fontSize: 18.0,
      fontWeight: FontWeight.w400,
      color: Colors.grey[600],
    ),
    subtitle1: TextStyle(
      fontSize: 34.0,
      fontWeight: FontWeight.w400,
      color: Color.fromRGBO(26, 25, 60, 1.0),
    ),
    subtitle2: TextStyle(
      fontSize: 34.0,
      fontWeight: FontWeight.w700,
      color: Color.fromRGBO(26, 25, 60, 1.0),
    ),
  ),
);
