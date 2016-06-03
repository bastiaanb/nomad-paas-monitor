job "paas-monitor" {
	datacenters = ["dc1"]
	group "paas-monitor" {
		task "paas-monitor" {
			env {
				AUTHOR = "erik"
			}

			driver = "docker"
			config {
				image = "eveld/nomad-paas-monitor:0.0.2"
				port_map {
					http = 80
				}
			}
			resources {
				cpu = 500
				memory = 256
				network {
					mbits = 10
					port "http" {
					}
				}
			}
		}
	}
}
