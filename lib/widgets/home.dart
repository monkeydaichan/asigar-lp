import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';

class TopWidget extends StatelessWidget {
  TopWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);

    return Container(
      height: (isDesktop ? desktopHeight(context) : mobileHeight(context)),
      color: (isDesktop ? secondaryColor : Theme.of(context).primaryColor),
      child: Align(
          alignment: Alignment.center,
          child: Padding(
              padding: EdgeInsets.all(24.0),
              child: Container(
                  constraints: BoxConstraints.expand(),
                  child: (isDesktop
                      ? Card(
                          color: Theme.of(context).primaryColor,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(cardRadius),
                          ),
                          child: Padding(
                            padding: EdgeInsets.all(8.0),
                            child: Align(
                              alignment: Alignment.topLeft,
                              child: Text('asigar',
                                  style: Theme.of(context)
                                      .textTheme
                                      .headline1
                                      .apply(fontSizeDelta: 10)),
                            ),
                          ))
                      : Align(
                          alignment: Alignment.topLeft,
                          child: Text('asigar',
                              style: Theme.of(context).textTheme.headline1),
                        ))))),
    );
  }
}
