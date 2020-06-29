
<!-- README.md is generated from README.Rmd. Please edit that file -->
mapboxer
========

<!-- badges: start -->
[![CRAN status](https://www.r-pkg.org/badges/version/mapboxer)](https://CRAN.R-project.org/package=mapboxer) [![Travis-CI Build Status](https://travis-ci.org/crazycapivara/mapboxer.svg?branch=master)](https://travis-ci.org/crazycapivara/mapboxer) [![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) <!-- badges: end -->

The **mapboxer** package makes [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/), an open source JavaScript library that uses WebGL to render interactive maps, available within R via the [htmlwidgets](https://www.htmlwidgets.org/) package. You only need a Mapbox Access Token if you want to use (map) styles from Mapbox. By default **mapboxer** uses [Carto styles](https://github.com/CartoDB/basemap-styles) for basemaps. It is also possible to use raster tiles or a background color as map style.

Installation
------------

Install the development version from [GitHub](https://github.com/) with:

``` r
# install.packages("remotes")
remotes::install_github("crazycapivara/mapboxer")
```

Usage
-----

``` r
library(mapboxer)

# Circles
map <- quakes %>%
  as_mapbox_source(lng = "long", lat = "lat") %>%
  mapboxer(center = c(176.9, -24.655), zoom = 4) %>%
  add_navigation_control() %>%
  add_circle_layer(
    circle_color = "blue",
    circle_blur = 1,
    circle_stroke_color = "red",
    circle_stroke_width = 1,
    popup = "{{mag}}")

if (interactive()) map

# Polygons
map <- geojsonsf::geo_melbourne %>%
  as_mapbox_source() %>%
  mapboxer() %>%
  set_view_state(
    lng =  144.9624,
    lat = -37.8105,
    zoom = 10,
    pitch = 35
  ) %>%
  add_fill_layer(
    fill_color = c("get", "fillColor"),
    fill_opacity = 0.6,
    popup = "Area: {{AREASQKM}} km<sup>2</sup>"
  )

if (interactive()) map
```

Documentation
-------------

-   [API reference](https://crazycapivara.github.io/mapboxer/reference/)
-   [Examples](examples)

Development
-----------

All JavaScript code of the mapboxer module is located in [javascript/src](javascript/src).

Install dependencies and build the library with:

``` bash
npm install
npm run build
```

The module is written to [inst/htmlwidgets](inst/htmlwidgets).

Spin up the dev server with:

``` bash
npm run start
```
