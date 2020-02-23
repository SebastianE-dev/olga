const breakpoints = {
    // Extra small devices (portrait phones, less than 576px)
    xsm: "max-width: 575.98px",
    // Small devices (landscape phones, 576px and up)
    sm: {
      min: "min-width: 576px",
      max: "max-width: 767.98px",
    },
    // Medium devices (tablets, 768px and up)
    md: {
      min: "min-width: 768px",
      max: "max-width: 991.98px",
    },
    // Large devices (desktops, 992px and up)
    lg: {
      min: "min-width: 992px",
      max: "max-width: 1199.98px",
    },
    // Extra large devices (large desktops, 1200px and up)
    xlg: "min-width: 1200px",
  }
  
  export default breakpoints
  