# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "opendoc-theme"
  spec.version       = "2.0.8"
  spec.authors       = ["Opendoc"]
  spec.email         = ["admin@opendoc.sg"]

  spec.summary       = "Jekyll theme for Opendoc sites"
  spec.homepage      = "https://github.com/opendocsg/opendoc-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", ">= 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
