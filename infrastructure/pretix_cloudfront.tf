resource "aws_cloudfront_distribution" "pretix_distribution" {
  aliases = ["tickets.pycon.it"]

  origin {
    domain_name = "${aws_elastic_beanstalk_environment.pretix_env.cname}"
    origin_id   = "pretix"

    custom_origin_config {
      origin_protocol_policy = "http-only"
      http_port              = "80"
      https_port             = "443"
      origin_ssl_protocols   = ["TLSv1"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Pretix"
  wait_for_deployment = false

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn            = "${var.ssl_certificate}"
    minimum_protocol_version       = "TLSv1"
    ssl_support_method             = "sni-only"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "pretix"

    forwarded_values {
      query_string = true
      headers      = ["*"]

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    min_ttl                = 0
    default_ttl            = 604800
    max_ttl                = 31536000
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

output "pretix_distribution_id" {
  value = "${aws_cloudfront_distribution.pretix_distribution.id}"
}
