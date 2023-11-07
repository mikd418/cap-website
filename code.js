function NavTo() {
    var eqPosition = pageURL.indexOf("=");  //get the position number of "=" sign
    var html_id = pageURL.substring(eqPosition+1,pageURL.length);  //get the string to the right side of the "=" sign
    //few lines of required code
    }


    function myFunction() {
        var ssl_rtt = ssl_test
        var tcp_rtt = tcp_test
        var ip_address = "address_ip"
        if ((ssl_rtt - 20000) > tcp_rtt) {
            document.body.style.backgroundColor = "#C80000"
        }
        else {
            document.body.style.backgroundColor = "green"
        }
        document.getElementById("tcp_rtt").innerHTML = tcp_rtt;
        document.getElementById("ssl_rtt").innerHTML = ssl_rtt;
        document.getElementById("ip_address").innerHTML = ip_address;
        percentage = (ssl_rtt - tcp_rtt)
        document.getElementById("percent").innerHTML = Math.abs(percentage);
        var tcpi_rtt = tcpi_rtt_test;
        document.getElementById("tcpi_rtt").innerHTML = tcpi_rtt ?? 'null';
        var tcpi_rttvar = tcpi_rttvar_test;
        document.getElementById("tcpi_rttvar").innerHTML = tcpi_rttvar ?? 'null';
        var tcpi_snd_cwnd = tcpi_snd_cwnd_test;
        document.getElementById("tcpi_snd_cwnd").innerHTML = tcpi_snd_cwnd ?? 'null';
        var tcpi_rcv_space = tcpi_rcv_space_test;
        document.getElementById("tcpi_rcv_space").innerHTML = tcpi_rcv_space ?? 'null';
        var tcpi_options = tcpi_options_test;
        document.getElementById("tcpi_options").innerHTML = tcpi_options ?? 'null';
        var tcpi_ca_state = tcpi_ca_state_test;
        document.getElementById("tcpi_ca_state").innerHTML = tcpi_ca_state ?? 'null';
        var tcpi_state = tcpi_state_test;
        document.getElementById("tcpi_state").innerHTML = tcpi_state ?? 'null';
        var tcpi_retransmits = tcpi_retransmits_test;
        document.getElementById("tcpi_retransmits").innerHTML = tcpi_retransmits ?? 'null';
        var tcpi_probes = tcpi_probes_test;
        document.getElementById("tcpi_probes").innerHTML = tcpi_probes ?? 'null';
        var tcpi_backoff = tcpi_backoff_test;
        document.getElementById("tcpi_backoff").innerHTML = tcpi_backoff ?? 'null';
        var tcpi_snd_wscale = tcpi_snd_wscale_test;
        document.getElementById("tcpi_snd_wscale").innerHTML = tcpi_snd_wscale ?? 'null';
        var tcpi_rcv_wscale = tcpi_rcv_wscale_test;
        document.getElementById("tcpi_rcv_wscale").innerHTML = tcpi_rcv_wscale ?? 'null';
        var tcpi_rto = tcpi_rto_test;
        document.getElementById("tcpi_rto").innerHTML = tcpi_rto ?? 'null';
        var tcpi_ato = tcpi_ato_test;
        document.getElementById("tcpi_ato").innerHTML = tcpi_ato ?? 'null';
        var tcpi_snd_mss = tcpi_snd_mss_test;
        document.getElementById("tcpi_snd_mss").innerHTML = tcpi_snd_mss ?? 'null';
        var tcpi_rcv_mss = tcpi_rcv_mss_test;
        document.getElementById("tcpi_rcv_mss").innerHTML = tcpi_rcv_mss ?? 'null';
        var tcpi_unacked = tcpi_unacked_test;
        document.getElementById("tcpi_unacked").innerHTML = tcpi_unacked ?? 'null';
        var tcpi_sacked = tcpi_sacked_test;
        document.getElementById("tcpi_sacked").innerHTML = tcpi_sacked ?? 'null';
        var tcpi_lost = tcpi_lost_test;
        document.getElementById("tcpi_lost").innerHTML = tcpi_lost ?? 'null';
        var tcpi_retrans = tcpi_retrans_test;
        document.getElementById("tcpi_retrans").innerHTML = tcpi_retrans ?? 'null';
        var tcpi_fackets = tcpi_fackets_test;
        document.getElementById("tcpi_fackets").innerHTML = tcpi_fackets ?? 'null';
        var tcpi_last_data_sent = tcpi_last_data_sent_test;
        document.getElementById("tcpi_last_data_sent").innerHTML = tcpi_last_data_sent ?? 'null';
        var tcpi_last_ack_sent = tcpi_last_ack_sent_test;
        document.getElementById("tcpi_last_ack_sent").innerHTML = tcpi_last_ack_sent ?? 'null';
        var tcpi_last_data_recv = tcpi_last_data_recv_test;
        document.getElementById("tcpi_last_data_recv").innerHTML = tcpi_last_data_recv ?? 'null';
        var tcpi_last_ack_recv = tcpi_last_ack_recv_test;
        document.getElementById("tcpi_last_ack_recv").innerHTML = tcpi_last_ack_recv ?? 'null';
        var tcpi_pmtu = tcpi_pmtu_test;
        document.getElementById("tcpi_pmtu").innerHTML = tcpi_pmtu ?? 'null';
        var tcpi_rcv_ssthresh = tcpi_rcv_ssthresh_test;
        document.getElementById("tcpi_rcv_ssthresh").innerHTML = tcpi_rcv_ssthresh ?? 'null';
        var tcpi_snd_ssthresh = tcpi_snd_ssthresh_test;
        document.getElementById("tcpi_snd_ssthresh").innerHTML = tcpi_snd_ssthresh ?? 'null';
        var tcpi_advmss = tcpi_advmss_test;
        document.getElementById("tcpi_advmss").innerHTML = tcpi_advmss ?? 'null';
        var tcpi_reordering = tcpi_reordering_test;
        document.getElementById("tcpi_reordering").innerHTML = tcpi_reordering ?? 'null';
    }
